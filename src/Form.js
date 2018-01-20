import React from 'react';

export class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state= {newData:{}}
      this.handleSubmit = this.handleSubmit.bind(this);
    }

   handleSubmit(event) {
     event.preventDefault();
     let newJob = {
       title: event.target[0].value,
       pay: event.target[1].value,
       description: event.target[2].value,
       interested: []
     }
     this.props.updateData(newJob)
     event.target.reset()
   }

   render() {
     return    <form className='job-form' onSubmit={this.handleSubmit} newjob={this.state.newData}>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" />
      <label htmlFor="pay">Pay</label>
      <input type="text" name="pay" />
      <label htmlFor="description">Description</label>
      <textarea name="description" rows="8"/>
      <input type="submit" value="Submit" />
      </form>
   }
}
