import React from 'react';
import ReactDom from 'react-dom';

class ShopItem extends React.Component {
	render() {
		return(
		<tr>
		<td>aaa</td>
		<td>bbb</td>
		</tr>
	)

	}	
}

class App extends React.Component{
	render(){
		return(
		<table>
		<tbody>
		<ShopItem />
		<ShopItem />
		</tbody>
		</table>
		)
	}
}

ReactDom.render(<App />,document.getElementById('root'));
