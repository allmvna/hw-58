import "./App.css";
import Modal from "./components/UI/Modal/Modal.tsx";
import {useState} from "react";
import Alert from "./components/UI/Alert/Alert.tsx";
import {AnimatePresence} from "framer-motion";


const App = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const cancel = () => setShowModal(false);
  const closeAlert = () => setShowAlert(false);

  const arrayConfigButtons = [
    {
      type: "primary",
      label: "Continue",
      onClick: () => alert('close'),
    },
    {
      type: "danger",
      label: "Close",
        onClick: cancel,
    },
  ];

  return (
      <>
          <div className='text-center my-5'>
              <button className='btn btn-outline-light btn-lg text-uppercase me-3'
                      onClick={() => setShowModal(true)}>Show modal window
              </button>
              <button className='btn btn-outline-light btn-lg text-uppercase'
                      onClick={() => setShowAlert(true)}>Show alert
              </button>

          </div>

          <Modal
              show={showModal}
              closeModal={cancel}
              title="Some kinda modal title"
              arrayConfigButtons={arrayConfigButtons}
          >
              <p>This is modal content</p>
          </Modal>

          <AnimatePresence>
              {showAlert && (
                  <Alert type="warning" onDismiss={closeAlert} clickDismissable={true}>
                      This is a warning type alert
                  </Alert>
              )}
          </AnimatePresence>
          <Alert type="success"  clickDismissable={false} >This is a success type alert</Alert>
      </>
  );
};

export default App;
