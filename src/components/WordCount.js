import { useState } from "react";
function WordCounter() {
    const [state, setState] = useState({
        wordCount: 0
    });

    const handleKeyPress = (e) => {
        const count = e.target.value;

        const countWords = (count) => {
            if (count.length === 0) {
                return 0;
            } else {
                count = count.replace(/(^\s*)|(\s*$)/gi, "");
                count = count.replace(/[ ]{2,}/gi, " ");
                count = count.replace(/\n /, "\n");
                return count.split(' ').length;
            }
        }

        setState({
            wordCount: countWords(count),
          
        });
    }
    const style1 ={
        marginTop:100,
     
            width: 600, 
            height: 500,
            boxShadow: '0px -5px 5px -5px #f2eeed, -5px 0px 5px -5px #f2eeed, 5px 0px 5px -5px #f2eeed',
            border: '3px solid #f2eeed',
            fontStyle:'italic'
    }
const  style2={
    paddingTop:20,
    paddingBottom:30
}
    return (
        <center >
            <form  >
                <div class="row"  style={style1}>
                    <div class=" col-md-12 col-lg-12 col-sm-12 border-bottom-0 " >
                       <h1 style={style2}>Responsive Paragraph Word <br></br> Counter</h1>
                        <textarea onChange={handleKeyPress} rows="5" cols="70" > </textarea>
                        <br></br>
                        <br></br>
                        <p style={{textAlign:"start"}} class="ms-3">Word Count:  {state.wordCount}</p>
                      
                    </div>
                </div>
            </form>
        </center>
    );


}
export default WordCounter;



