import React, { useEffect, useState } from "react";
import * as S from "./styled";

function Repositories() {
    const [repositories, setRepositories] = useState([]);
    useEffect(() => {
        let repositoriesName = localStorage.getItem("repositoriesName");
        repositoriesName = JSON.parse(repositoriesName);
        setRepositories(repositoriesName);
    }, []);

    return (
        <S.Container>
            <S.Title>Repositórios</S.Title>
            <S.List>
                {repositories.map((repository) => {
                    return <li>{repository}</li>;
                })}
            </S.List>
            <S.LinkHome to="/">Voltar</S.LinkHome>
        </S.Container>
    );
}

export default Repositories;
