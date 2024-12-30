'use client';

import { Controller, useForm, useWatch } from 'react-hook-form';
// import { type BaseError, useSendTransaction, useWaitForTransactionReceipt } from 'wagmi';
import { Button } from './Button';
import { RadioGroup } from './RadioGroup';
import { SingleSelect } from './SingleSelect';
import { getDataForSelect } from '@/utils/utils';
import { Network } from '@/config/types';
import { TOKENS } from '@/config/constants';
// import { parseEther } from 'viem';

interface FormData {
  readonly address: string;
  readonly amount: string;
  readonly network: Network;
  readonly token: string;
}

const options = [
  { value: 'Arbitrum', label: 'Arbitrum', activeStyles: 'text-blue border-blue' },
  { value: 'Optimism', label: 'Optimism', activeStyles: 'text-red border-red' },
  { value: 'Ethereum', label: 'Ethereum', activeStyles: 'border-white' },
];

interface Props {
  readonly availableAmount?: number;
  readonly chain?: Network;
  readonly symbol?: string;
}

export const WithdrawForm = ({ availableAmount, chain, symbol }: Props) => {
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
  // const { data: hash, error, isPending, sendTransaction } = useSendTransaction();
  // const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({
  //   hash,
  // });

  const handleFinish = ({ address, amount, network, token }: FormData) => {
    console.log('address', address);
    console.log('amount', amount);
    console.log('network', network);
    console.log('token', token);
    // sendTransaction({ to: address, value: parseEther(amount) });
  };

  return (
    <div className="flex flex-col gap-4">
      <hr className="text-center h-1 overflow-visible after:content-['Network'] after:relative after:top-[-13px] after:p-1 after:bg-bg-trans-grey" />

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleFinish)}>
        <Controller
          control={control}
          name="network"
          render={({ field: { value, onChange } }) => (
            <RadioGroup value={value} options={options} name="Network" onChange={onChange} />
          )}
        />

        <hr className="border-b-bg-2 border-dashed" />
        <input
          className="w-full p-3 rounded-4 border border-bg-2 bg-gray-10 text-base text-secondary hover:bg-gray-8 focus:ring-2 focus:ring-gray-6 focus:border-gray-6"
          placeholder="Address"
          autoComplete="off"
          {...register('address', {
            required: 'Address is required',
            pattern: {
              value: /^0x[a-fA-F0-9]{40}$/,
              message: 'Invalid Ethereum address',
            },
          })}
        />
        {errors.address && <span className="text-red">{errors.address.message}</span>}

        <div className="flex gap-2">
          <Controller
            control={control}
            name="token"
            render={({ field: { value, onChange } }) => (
              <SingleSelect
                className="w-24"
                data={getDataForSelect(TOKENS)}
                value={value}
                onChange={onChange}
              />
            )}
          />

          <div className="flex flex-col gap-2 w-full">
            <input
              className="w-full p-3 rounded-4 border border-bg-2 bg-gray-10 text-base text-secondary hover:bg-gray-8 focus:ring-2 focus:ring-gray-6 focus:border-gray-6"
              autoComplete="off"
              placeholder="Amount"
              required
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
          Available {availableAmount ?? ''}
        </div>
        <Button className="w-full mt-2" type="submit">
          {watchedAmount ? `Withdraw ${watchedToken} ${watchedAmount}` : 'Withdraw'}
        </Button>
      </form>
    </div>
  );
};
