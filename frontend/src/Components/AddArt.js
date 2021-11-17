import React from 'react';
import { fetchGalleries} from '../Actions/galleriesActions';
import { connect } from 'react-redux';
import Form from './Form';

class AddArt extends React.Component {
    componentDidMount() {
        this.props.loadGalleries();
    }

    displayForm() {
        return (       
        <Form key={1} galleries ={this.props.galleries} />     
        )
    }

    render() {
        const { isLoading, error } = this.props;
        return (
                this.displayForm() 
             )
    }
}

const mapStateToProps = (state) => {
    return {
      isLoading: state.galleriesReducer.loading,
      galleries: state.galleriesReducer.galleries,
      error: state.galleriesReducer.error
    }
  }


  const mapDispatchToProps = (dispatch) => {
  return {
    loadGalleries: () => dispatch(fetchGalleries())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddArt);