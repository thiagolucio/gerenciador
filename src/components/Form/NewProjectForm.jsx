import React, { useEffect, useState } from "react";
import Input from '../Input/Input';
import TextArea from '../Input/TextArea';
import Select from '../Input/Select';
import Button from '../Button/Button';

import "./NewProjectForm.css";


function NewProjectForm({ btnText, handleSubmit, projectData }) {
    
    const [categories, setCategories] = useState([]);
    const [project, setProject] = useState(projectData || {});


    useEffect(() => {
        fetch("http://localhost:4000/categories", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then((response) => response.json())
        .then((data) => {
            console.log('API Categories: ', data);
            setCategories(data);
        })
        .catch((error) => console.log(error));
    }, []);

    const submit = (e) => {
        e.preventDefault();
        handleSubmit(project);
        console.log('Lidando com Submissao projeto ->', project);
    }

    function handleChange(e) {
        setProject({ ...project, [e.target.name]: e.target.value })
        console.log('Passando dados inputs ->', project);
    }    
    
    function handleCategory(e) {
        
        setProject({...project, category: {
            id: e.target.value,
            name: e.target.options[e.target.selectedIndex].text
        },
    });
        console.log('Lidando com Categoria ->', project);
    }

    return (
        <>
         <form onSubmit={submit} className="form_new_project">
                    <Input
                    type="text" 
                    name="name" 
                    placeholder="Digite Nome" 
                    handleOnChange={handleChange}
                    value={project.name ? project.name : ''}
                    />            
                        
                    <Input
                    type="email" 
                    name="email"
                    placeholder="digite o email" 
                    handleOnChange={handleChange}
                    value={project.email ? project.email : ''}
                    />

                    
                    <Input
                    type="number" 
                    name="phone"
                    placeholder="Digite Telefone" 
                    handleOnChange={handleChange}
                    value={project.phone ? project.phone : ''}
                    />
                    
                    <Input
                    type="number" 
                    name="budget"
                    placeholder="Digite valor orçamento" 
                    handleOnChange={handleChange}
                    value={project.budget ? project.budget : ''}
                    text="" />
                    
                    <Select
                    name="category_id"
                    text="Selecione uma categoria"
                    options={categories}
                    handleOnChange={handleCategory}
                    value={project.category ? project.category.id : ''} />

                    <TextArea 
                    type="textarea" 
                    name="description"
                    rows="5" 
                    cols="20"
                    placeholder="Descrição serviços" 
                    handleOnChange={handleChange}
                    value={project.description ? project.description : ''}
                    /> 
              
         
            </form>
        </>
    )
}

export default NewProjectForm;