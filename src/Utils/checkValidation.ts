import { FormikProps } from "formik";

type FormikErrorType = {
    name?: string,
    username?: string
    email?: string
    street?: string
    city?: string
    zipcode?: string
    phone?: string
    website?: string
}
export const checkValidation = (
    formik: FormikProps<FormikErrorType>,
    values: FormikErrorType,
    setDisabled: (disable: boolean) => void,
) => {
    const errors: FormikErrorType = {};
    if (!values.name) errors.name = 'Required'
    if (!values.username) errors.username = 'Required'
    if (!values.email) errors.email = 'Required'
    if (!values.street) errors.street = 'Required'
    if (!values.city) errors.city = 'Required'
    if (!values.zipcode) errors.zipcode = 'Required'
    if (!values.phone) errors.phone = 'Required'
    if (!values.website) errors.website = 'Required'
    if (formik.errors.name
        || formik.errors.username
        || formik.errors.email
        || formik.errors.street
        || formik.errors.city
        || formik.errors.zipcode
        || formik.errors.phone
        || formik.errors.website){
        // eslint-disable-next-line @typescript-eslint/no-magic-numbers
        if (Object.keys(errors).length === 0) {
            setDisabled(false)
        } else {
            setDisabled(true)
        }
    }
    return errors;
};
