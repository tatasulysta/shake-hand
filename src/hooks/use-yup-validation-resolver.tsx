import { yupResolver } from '@hookform/resolvers/yup';
import { FieldValues, Resolver } from 'react-hook-form';

const useYupValidationResolver = <T extends FieldValues>(
  validationSchema,
): Resolver<T, any> => {
  return yupResolver(validationSchema) as unknown as Resolver<T, any>;
};

export default useYupValidationResolver;
