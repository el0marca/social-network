import React from 'react';
import s from './FormsControls.module.css'

export const Textarea = ({ input, meta, ...props }) => {
    const required = meta.touched && meta.error;
    const maxLength = input.value && meta.error;
    return (
        <div className={maxLength || required ? s.required : null}>
            <textarea {...input} {...props} />
            <span>{required ? meta.error : null}</span>
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {
    const required = meta.touched && meta.error;
    const maxLength = input.value && meta.error;
    return (
        <div className={maxLength || required ? s.required : null}>
            <input {...input} {...props} />
            <span>{required ? meta.error : null}</span>
        </div>
    )
}