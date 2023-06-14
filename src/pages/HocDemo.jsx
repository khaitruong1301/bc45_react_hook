import React, { Component } from 'react'
import ModalHOC from '../HOC/ModalHOC'
import Login from './Login'
import Home from './Home'
import ContainerModal from '../HOC/ContainerModal'
import { openPopupAction } from '../redux/reducers/modalReducer'
import { store } from '../redux/configStore'
import { useDispatch } from 'react-redux'




export default class HocDemo extends Component {
    state = {
        component: <Home />
    }


    render() {
        const ModalComponent = ModalHOC(this.state.component);
        return <div className='container'>

            <h3>Demo popup modal (HOC)</h3>
            {/* Modal trigger button */}
            <button type="button" className="btn btn-primary btn-lg mx-2" onClick={async () => {
                await this.setState({
                    component: <Login />
                });
                document.getElementById('modal-click').click();

                const action = openPopupAction(<Login />);
                //dispatch(action);
                store.dispatch(action);

            }}>
                Login
            </button>
            {/* Modal trigger button */}
            <button type="button" className="btn btn-primary btn-lg" onClick={async () => {
                await this.setState({
                    component: <Home />
                });

                const action = openPopupAction(<Home />);
                //dispatch(action);
                store.dispatch(action);

                document.getElementById('modal-click').click();
            }}>
                Home
            </button>
            <button data-bs-toggle="modal" data-bs-target="#modalId" id="modal-click" className='d-none' ></button>
            {/* <ModalComponent /> */}
            {/* <ContainerModal component={this.state.component} /> */}


        </div>
    }
}



// export default function HocDemo() {
//     const dispatch = useDispatch();
//     return <div className='container'>

//         <h3>Demo popup modal (HOC)</h3>
//         {/* Modal trigger button */}
//         <button type="button" className="btn btn-primary btn-lg mx-2" onClick={async () => {

//             const action = openPopupAction(<Login />);
//             //dispatch(action);
//             dispatch(action);
//             document.getElementById('modal-click').click();



//         }}>
//             Login
//         </button>
//         {/* Modal trigger button */}
//         <button type="button" className="btn btn-primary btn-lg" onClick={async () => {
            
//             document.getElementById('modal-click').click();
//             const action = openPopupAction(<Home />);
//             //dispatch(action);
//             dispatch(action);

//         }}>
//             Home
//         </button>
//         <button data-bs-toggle="modal" data-bs-target="#modalId" id="modal-click" className='d-none' ></button>
//         {/* <ModalComponent /> */}
//         {/* <ContainerModal component={this.state.component} /> */}


//     </div>

// }
