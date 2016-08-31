var photos = ['images/cat.jpg', 'images/dog.jpg', 'images/ow1.jpg'];

// ReactDOM.render(
// 	<App>
// 		<Photos photos=photos />
// 		<LastNews />
// 		<Comments />
// 	</App>,
// 	document.getElementById('root')
// );

var News = React.createClass({
	render: function() {
		return (
			<div className="news">
				К сожалению, новостей нет.
			</div>
		)
	}
});

var Comments = React.createClass({
    render() {
        return (
            <div className="comments">
            	Нет новостей - комментировать нечего.
            </div>
        );
    }
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				Всем привет, я компонент App!
				<News />
				<Comments />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
)