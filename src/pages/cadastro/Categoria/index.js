import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const valoresInicias = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresInicias);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setCategorias([...categorias, values]);

          setValues(valoresInicias);
        }}
      >
        <FormField
          label="Nome da Categoria"
          type="text"
          value={values.nome}
          onChange={(e) => setValues({ ...values, nome: e.target.value })}
        />

        <FormField
          label="Descrição"
          type="textarea"
          value={values.descricao}
          onChange={(e) => setValues({ ...values, descricao: e.target.value })}
        />

        <FormField
          label="Cor"
          type="color"
          value={values.cor}
          onChange={(e) => setValues({ ...values, cor: e.target.value })}
        />

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, index) => <li key={index}>{categoria.nome}</li>)}
      </ul>

      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
