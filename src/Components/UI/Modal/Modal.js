import React, {Component} from 'react';
import modalCSS from './Modal.module.css';
import Aux from '../../../hoc/Auxiliary/Auxiliar';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    // This is a class component to improve performance avoiding unnecesary updates/renders.
    shouldComponentUpdate (nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    /* componentDidUpdate() {
        console.log('modal did update');
    } */

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className={modalCSS.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }} >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;