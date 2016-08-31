var photos = ['images/cat.jpg', 'images/dog.jpg', 'images/ow1.jpg'];

var my_news = [
	{
		id: 1
		,author: 'Саша Печкин'
		,text: 'В четверг, четвертого числа...'
	}
	,{
		id: 2
		,author: 'Просто Вася'
		,text: 'Считаю, что $ должен стоить 35 рублей!'
	}
	,{
		id: 3
		,author: 'Гость'
		,text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
	}
];

var News = React.createClass({
	render: function() {
		var data = this.props.data;
		var newsTemplate;
		if (data.length > 0) {
			newsTemplate = data.map(function(item) {
				return (
					<div key={item.id}>
						<p className="author">{item.author}</p>
						<p className="text">{item.text}</p>
					</div>
				)
			})	
		} else {
			newsTemplate = <p>К сожалению, новостей нет.</p>
		}
		return (
			<div className="news">
				{newsTemplate}
				<p className={data.length > 0 ? '':'hidden'}><strong>Новостей всего: {data.length}</strong></p>
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
				<News data={my_news} />
				<Comments />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
)