import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, sign } from './redux/actions/index';
function App() {
	const counter = useSelector((state) => state.counter);
	const isLogged = useSelector((state) => state.isLogged);
	const dispatch = useDispatch();
	return (
		<div className='App'>
			<h1>Hello World</h1>
			<p>The count is {counter}</p>
			<button onClick={() => dispatch(increment())}>+</button>
			<button onClick={() => dispatch(decrement())}>-</button>
			<button onClick={() => dispatch(sign())}>IsLoggedIn</button>
			{isLogged ? <p>True</p> : <p>False</p>}
		</div>
	);
}

export default App;
