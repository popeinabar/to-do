import React, { Component } from 'react'
import '../App.css';


export default class Todo extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         toDoTasks : [],
         input:'',
        //  term:this.state.input
      }
    }

    onChangeHandler(e){
        this.setState({
            input : e.target.value
        })
    }
    AddItem(e){
        e.preventDefault();
        this.setState({
            input:'',
            
         toDoTasks:[...this.state.toDoTasks, this.state.input]
        })
    }
    delete(index){

        const deleteTask = [...this.state.toDoTasks, this.state.input];
        deleteTask.splice(index,1);
        this.setState({
            input:'',
            toDoTasks:deleteTask
        })
    }
    edit(index){
        const UpdatedTask = [...this.state.toDoTasks, this.state.input];
        let updatedtask = prompt("Kindly update the task here");
        UpdatedTask.splice(index,1,updatedtask);
        this.setState({

            toDoTasks:UpdatedTask
        })
        
    }
    
  render() {
    return (
      <div>
        <h1>To-Do-List</h1>
        <input type="text" value={this.state.input} placeHolder="What you want to do Today!" onChange={(e)=>this.onChangeHandler(e)}/>
        <button id='add-btn' onClick={(e)=>this.AddItem(e)}>Add Item</button>
        <div>
            <ul>
               {this.state.toDoTasks.map((e,index) => {
                if(e!=''){
                    return (
                        <div className='list-wrapper'>
                            <div className='task-div'>
                    <li className='list' onClick={()=>this.edit(index)} >{e}</li>
                    </div>
                    <button className='delete-btn' onClick={()=>this.edit(index)}>Edit</button>
                    <button className='delete-btn' onClick={()=>this.delete(index)}>Delete</button>
                    
                    </div>
                    )


                }
                
               })}
            </ul>
                
                
        
        </div>
      </div>
    )
  }
}