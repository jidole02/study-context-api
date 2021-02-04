import './App.css';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
import { SampleProvider } from './contexts/sample';

// contex api는 클래스형으로 작성 (render 때문에 ?)
const App=()=> {
  return (
    <SampleProvider>
      <div className="panes">
        <LeftPane></LeftPane>
        <RightPane></RightPane>
      </div>
    </SampleProvider>
  );
}

export default App;
