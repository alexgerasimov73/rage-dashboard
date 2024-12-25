'use client';

import { Button } from './Button';
import { Controller, useForm, useWatch } from 'react-hook-form';
import { SingleSelect } from './SingleSelect';
import { getDataForSelect } from '@/utils/utils';
import { RadioGroup } from './RadioGroup';
import { Network } from '@/config/types';
import { TOKENS } from '@/config/constants';

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
  readonly amount?: number;
  readonly chain?: Network;
  readonly symbol?: string;
}

export const WithdrawForm = ({ amount, chain, symbol }: Props) => {
  const {
    control,
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();
  const watchedAmount = useWatch({
    control,
    name: 'amount',
    defaultValue: '',
  });
  const watchedToken = useWatch({
    control,
    name: 'token',
    defaultValue: symbol,
  });

  const handleFinish = ({ address, amount, network, token }: FormData) => {
    console.log('address', address);
    console.log('amount', amount);
    console.log('network', network);
    console.log('token', token);
  };

  return (
    <div className="flex flex-col gap-4">
      <hr className="text-center h-1 overflow-visible after:content-['Network'] after:relative after:top-[-13px] after:p-1 after:bg-bg-trans-grey" />

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(handleFinish)}>
        <Controller
          control={control}
          name="network"
          render={({ field: { value = chain, onChange } }) => (
            <RadioGroup value={value} options={options} name="Network" onChange={onChange} />
          )}
        />

        <hr className="border-b-bg-2 border-dashed" />
        <input
          className="w-full p-3 rounded-4 border border-bg-2 bg-gray-10 text-base text-secondary hover:bg-gray-8 focus:ring-2 focus:ring-gray-6 focus:border-gray-6"
          placeholder="Address"
          autoComplete="off"
          required
          {...register('address', { required: 'Address is required!' })}
        />

        <div className="flex gap-2">
          <Controller
            control={control}
            name="token"
            render={({ field: { value = symbol, onChange } }) => (
              <SingleSelect
                className="w-24"
                data={getDataForSelect(TOKENS)}
                value={value || ''}
                onChange={onChange}
              />
            )}
          />

          <input
            className="w-full p-3 rounded-4 border border-bg-2 bg-gray-10 text-base text-secondary hover:bg-gray-8 focus:ring-2 focus:ring-gray-6 focus:border-gray-6"
            placeholder="Amount"
            autoComplete="off"
            type="number"
            required
            {...register('amount', { required: 'Address is required!' })}
          />
        </div>
        <div className="flex justify-center py-2 rounded-4 border border-bg-2 bg-gray-10 text-base text-secondary">
          Available {amount ?? ''}
        </div>
        <Button className="w-full mt-2" type="submit">
          {watchedAmount ? `Withdraw ${watchedToken}${watchedAmount}` : 'Withdraw'}
        </Button>
      </form>
    </div>
  );
};
