import React from 'react';

const FormAction = () => {

    const handleFormAction = (formDAta) => {
        console.log(formDAta.get('name'));
        console.log(formDAta.get('email'));
    }

    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name='name' placeholder='Name' />
                <br />
                <input type="email" name="email" placeholder='Email' id="" />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormAction;