import React, {Component} from "react"

import "../styles/BillAndTip.css"

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
            let tip = parseFloat((this.state.tipPercentage/ 100) * this.state.total).toFixed(2)
            let total = parseFloat(this.state.total + tip)
            this.setState({
                tipFigure: tip,
                billTotal: total
            })
        }

    render(){ 
      return(
            <div>    
                        <form onSubmit={this.genTip}>
                            <label>
                            Bill Total:
                            <input type="text" value={this.state.total} onChange={this.handleTotal} />
                            </label>
                            <label>
                            Tip Percentage:
                            <input type="text" value={this.state.tipPercentage} onChange={this.handleTip} />%
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
                        <p>Tip Amount: ${this.state.tipFigure}</p>
                        <p>Bill Total: ${this.state.billTotal}</p>
                </div>
            )
        }
}



export default BillAndTip