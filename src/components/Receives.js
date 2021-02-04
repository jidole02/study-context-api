import { SampleConsumer } from "../contexts/sample";

export default function Receives(){
    return( 
        <SampleConsumer> {/* 사용할 때 consumer 쓰는 듯 */}
                {
                    // Render Props
                    (e) =>(
                        
                        <div>
                            현재 설정된 값 :  {e.state.value}
                        </div>
                    )
                }
        </SampleConsumer>
    )
}