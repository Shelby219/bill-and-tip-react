import React, {Component} from "react"

import "../styles/BillAndTip.css"
import {Container} from './Styled'



class BillAndTip extends Component {
    constructor(props){
        super(props)
        this.state = {
            total: 0,
            tipPercentage: 0
        }
    }

        handleTotal = (event)=> {
            this.setState({
                total: event.target.value
            })
        }

        handleTip = (event)=> {
            this.setState({
                tipPercentage: event.target.value
            })
        }

        genTip = (event) => {
            event.preventDefault();   
            let tip = parseFloat((this.state.tipPercentage/ 100) * this.state.total)

            let newTotal = parseFloat(+this.state.total + +tip)
            this.setState({
                tipFigure: Math.round(tip * 100) / 100,
                billTotal: newTotal
            })
            console.log(tip)
            console.log(newTotal)
        }
        clearCache = () => {
            window.location.reload(false);
        }

    render(){ 
      return(
            <div>   
            <Container>
                    <h1>Bill & Tip</h1>
                        <form onSubmit={this.genTip}>
                            <label>
                            Bill Total: $
                            <input type="number" value={this.state.total} onChange={this.handleTotal} />
                            </label>
                            <label>
                            Tip Percentage: %
                            <input type="number" value={this.state.tipPercentage} onChange={this.handleTip} />
                            </label>
                            <input type="submit" value="Submit"/>
                        </form>
                        <p>Tip Amount: ${this.state.tipFigure}</p>
                        <p>Bill Total: ${this.state.billTotal}</p>
                        <button onClick={this.clearCache}>Clear</button>
            </Container> 
                </div>
            )
        }
}



export default BillAndTip