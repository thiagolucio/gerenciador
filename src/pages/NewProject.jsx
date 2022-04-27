import React  from 'react';
import { useNavigate } from 'react-router-dom';
import NewProjectForm from "../components/Form/NewProjectForm";


function NewProject() {
    const navigate = useNavigate();

    function createPost(project) {
        project.cost = 0;
        project.services = [];

        fetch("http://localhost:4000/projects", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(project),
        })
            .then((response) => response.json())
            .then((data) => {
              console.log('API Projects: ', data);
              navigate("/projetos", {message: "Projeto criado com sucesso!"});
            })
            .catch((error) => console.log(error));
        }


    return (
        <div className="d-flex flex_vertical centralize">
            <h1>Novo Cliente</h1>            
            <NewProjectForm btnText="Adicionar Cliente" handleSubmit={createPost} />            
        </div>

    )
}

export default NewProject;