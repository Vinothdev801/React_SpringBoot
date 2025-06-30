import React from "react";
import UserService from "../services/UserService";

class UserComponent extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }

    componentDidMount(){
        UserService.getUsers().then((response) =>
        {
            this.setState({ users: response.data });
        });
    }
    render() {
        return (
            <div>
                <h1 className="text-center"> Users list</h1>
                <table className="table table-stripped">
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>User Name</th>
                            <th>User Email</th>
                        </tr>
                    </thead>
                    <tbody>
                        { 
                            this.state.users.map((user) =>{
                                return(
                                    <tr key={user.id}> 
                                        <td>{user.id}</td>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                    </tr>

                                );
                                    
                            }
                                    
                            )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent;