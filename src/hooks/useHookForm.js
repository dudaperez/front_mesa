import { useForm, useWatch } from 'react-hook-form'
import useYupValidationResolver from './useYupValidationResolver'

const useHookForm = (props) => {
  const { validationSchema, defaultValues, onSubmitForm } = props
  const resolver = useYupValidationResolver(validationSchema)

  const {
    register,
    reset,
    control,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors, isDirty, isValid }
  } = useForm({
    mode: 'onChange',
    reValidateMode: 'onChange',
    resolver,
    defaultValues
  })

  const watch = useWatch({ control })

  const submitForm = handleSubmit(onSubmitForm)

  return {
    watch,
    reset,
    errors,
    isDirty,
    isValid,
    control,
    setValue,
    register,
    submitForm,
    getValues
  }
}

export default useHookForm
