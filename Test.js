1.
decreaseValue() {
    this.setState( (state, props) => {
        const { value } = state,
              { step } = props;

        retrun {
            value: value + step
        }
    })
}

5.
class ColorInput extends Reaact.Component {
    state = {
        inputValue: null,
        boxStyleColor: null
    }

    onChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
    }

    onSubmit = () => {
        this.setState( (state, props) => {
            const { color } = state.inputValue;
            return {
                boxStyleColor: color
            }
        })
    }

    render() {
        return(
            <div className='line-group'>
                <form onSubmit={this.onSubmit}>
                    <input type="text" onChange={this.onChange}/>
                    <button>Add Color to box</button>
                </form>
                <div className='rect-box' {this.state.boxStyleColor ? style = {{backgroundColor: this.state.boxStyleColor}} : null}></div>
            </div>
        );
    }
}

6.
const nearestKey = (targetObj, number, radius) => {
    const keys = Object.keys(targetObj),
          keysInRadius = [];

    keys.forEach( el => {
        const numb = +el;
        if (numb < number + radius || numb > number - radius) {
            keysInRadius.push(numb)
        }
    })

    if (keysInRadius.length < 1) return null;

    return keysInRadius.reduce( (prev, next) => {
        return (Math.abs(prev - number) < Math.abs(next - number) ? prev : next);
    })
}