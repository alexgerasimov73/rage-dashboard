'use client';

import { Controller, useForm, useWatch } from 'react-hook-form';
import { useAccount, useSendTransaction, useWriteContract } from 'wagmi';
import { isAddress, parseEther, parseUnits } from 'viem';

import { Button } from './Button';
import { RadioGroup } from './RadioGroup';
import { SingleSelect } from './SingleSelect';
import { getDataForSelect, getTokenAddress } from '@/utils/utils';
import { Network } from '@/config/types';
import { chainIds, networkOptions, TOKENS } from '@/config/constants';
import { abi } from '@/config/abi';

interface FormData {
  readonly amount: string;
  readonly recipientAddress: string;
  readonly network: Network;
  readonly token: string;
}

interface Props {
  readonly availableAmount?: number;
  readonly chain?: Network;
  readonly decimals?: number;
  readonly symbol?: string;
}

export const WithdrawForm = ({ availableAmount, chain, decimals, symbol }: Props) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<FormData>({ defaultValues: { network: chain, token: symbol } });
  const watchedAmount = useWatch({
    control,
    name: 'amount',
  });
  const watchedToken = useWatch({
    control,
    name: 'token',
  });
  const { address: senderAddress } = useAccount();
  const { isPending: isSendEthLoading, sendTransaction } = useSendTransaction();
  const { isPending: isSendErc20Loading, writeContract } = useWriteContract();

  const handleFinish = ({ amount, network, recipientAddress, token }: FormData) => {
    if (
      !amount ||
      !decimals ||
      !network ||
      !recipientAddress ||
      !senderAddress ||
      !token ||
      !isAddress(recipientAddress)
    )
      return;

    if (token === 'ETH') {
      sendTransaction({
        chainId: chainIds[network],
        to: recipientAddress,
        value: parseEther(amount),
      });
    } else {
      const tokenAddress = getTokenAddress(token, network);
      if (!tokenAddress) return;

      writeContract({
        abi,
        address: tokenAddress,
        chainId: chainIds[network],
        functionName: 'transferFrom',
        args: [senderAddress, recipientAddress, parseUnits(amount, decimals)],
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <hr className="text-center h-1 overflow-visible after:content-['Network'] after:relative after:top-[-13px] after:p-1 after:bg-bg-trans-grey" />

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleFinish)}>
        <Controller
          control={control}
          name="network"
          rules={{ required: 'Choose the network' }}
          render={({ field: { value, onChange } }) => (
            <RadioGroup value={value} options={networkOptions} name="Network" onChange={onChange} />
          )}
        />
        {errors.network && <span className="text-red">{errors.network.message}</span>}

        <hr className="border-b-bg-2 border-dashed" />
        <input
          className="w-full p-3 rounded-4 border border-bg-2 bg-gray-10 text-base text-secondary transition hover:bg-gray-8 focus:border-gray-6 focus:outline-none"
          placeholder="Address"
          autoComplete="off"
          {...register('recipientAddress', {
            required: 'Address is required',
            pattern: {
              value: /^0x[a-fA-F0-9]{40}$/,
              message: 'Invalid Ethereum address',
            },
          })}
        />
        {errors.recipientAddress && (
          <span className="text-red">{errors.recipientAddress.message}</span>
        )}

        <div className="flex gap-2">
          <div className="flex flex-col gap-2">
            <Controller
              control={control}
              name="token"
              rules={{
                required: 'Choose the token',
              }}
              render={({ field: { value, onChange } }) => (
                <SingleSelect
                  className="w-24"
                  data={getDataForSelect(TOKENS)}
                  value={value}
                  onChange={onChange}
                />
              )}
            />
            {errors.token && <span className="text-red">{errors.token.message}</span>}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <input
              className="w-full p-3 rounded-4 border border-bg-2 bg-gray-10 text-base text-secondary transition hover:bg-gray-8 focus:border-gray-6 focus:outline-none"
              autoComplete="off"
              placeholder="Amount"
              {...register('amount', {
                required: 'Enter the amount',
                validate: {
                  positive: (value) => parseFloat(value) > 0 || 'Should be greater than 0',
                  lessThanAvailableAmount: (value) =>
                    !availableAmount ||
                    Number(value) <= availableAmount ||
                    'Exceeds available amount',
                },
              })}
            />
            {errors.amount && <span className="text-red">{errors.amount.message}</span>}
          </div>
        </div>

        <div className="flex justify-center py-2 rounded-4 border border-bg-2 bg-gray-10 text-base text-secondary">
          Available {availableAmount ?? '...'}
        </div>
        <Button
          className="w-full mt-2"
          disabled={isSendEthLoading || isSendErc20Loading}
          type="submit">
          {watchedAmount ? `Withdraw ${watchedToken} ${watchedAmount}` : 'Withdraw'}
        </Button>
      </form>
    </div>
  );
};
