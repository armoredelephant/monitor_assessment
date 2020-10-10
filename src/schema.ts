import * as yup from "yup";

export const landingSchema = yup.object().shape({
    name: yup.string().required().min(4),
    ref: yup.string(),
    email: yup.string().required().email(),
    count: yup.number()
});