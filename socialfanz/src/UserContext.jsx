import React from 'react';
import { GET_USERS } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
    const [data, setData] = React.useState(null);
    const [spinner, setSpinner] = React.useState(false);
    const [error, setError] = React.useState(null);

    React.useEffect(() => {
        async function getUser() {
            try {
                setError(null);
                setSpinner(true);
                const { url, options } = GET_USERS();
                const response = await fetch(url, options);
                const json = await response.json();
                const allData = await json.results.map(({ id, name, login, email, location, dob, phone, picture }) => ({
                    id: login.uuid,
                    nome: `${name.first} ${name.last}`,
                    usuario: login.username,
                    email,
                    endereco: `${location.street.name}, ${location.street.number}`,
                    dataNascimento: dob.date,
                    telefone: phone,
                    imagem: picture.large,
                    label: 'Nome: '
                }));
                setData(allData);
            } catch (e) {
                setError(e.message && 'Não foi possível obtir os dados dos Fanz');
            } finally {
                setSpinner(false);
            }
        }
        getUser();
    }, [])

    return <UserContext.Provider value={{ data, spinner, error }}>{children}</UserContext.Provider>
}