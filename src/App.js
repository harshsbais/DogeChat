import ChatContainer from './Components/Chat/ChatContainer'
import { Provider } from 'react-redux';
import store from './Redux/store';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ChatContainer />
      </div>
    </Provider>
  );
}

export default App;
