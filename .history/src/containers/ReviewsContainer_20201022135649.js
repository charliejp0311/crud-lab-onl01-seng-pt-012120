import React, { Component } from 'react';
import ReviewInput from '../components/reviews/ReviewInput';
import Reviews from '../components/reviews/Reviews';
import {connect} from 'react-redux';
class ReviewsContainer extends Component {

  render() {
    const{reviews,addReview,deleteReview} = this.props
    return (
      <div className='Review'>
        <ReviewInput addReview={addReview}/>
        <Reviews reviews={reviews} deleteReview={deleteReview}/>
      </div>
    )
  }
}

const mapStateToProps=state=>{
  return{reviews:state.reviews}
}

const mapDispatchToProps=dispatch=>{
  return{
    addReview: (text)=>dispatch({type:'ADD_REVIEW', text}),
    deleteReview: (id) => dispatch({type:'DELETE_REVIEW', id}),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(ReviewsContainer);
