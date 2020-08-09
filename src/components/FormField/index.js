import React from 'react';
import proptTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input``;

function FormField({
  label, type, value, onChange,
}) {
  const fieldId = `id_${type}`;
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';

  return (
    <div>
      <label htmlFor={fieldId}>
        {label}
        :
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.prototype = {
  label: proptTypes.string.isRequired,
  type: proptTypes.string,
  value: proptTypes.string,
  onChange: proptTypes.func,
};

export default FormField;
