var photos = ['images/cat.jpg', 'images/dog.jpg', 'images/ow1.jpg'];

var myNews = [
	{
		id: 1
		// ,author: 'Саша Печкин'
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

var Article = React.createClass({
    displayName: 'Article',
    propTypes: {
        article: React.PropTypes.shape({
        	author: React.PropTypes.string.isRequired,
        	text: React.PropTypes.string.isRequired
        })
    },
    render() {
    	var article = this.props.article;
        return (
        	<div className="article">
				<p className="author">{article.author}:</p>
				<p className="text">{article.text}</p>
        	</div>
        );
    }
});

var News = React.createClass({
	propTypes: {
	    news: React.PropTypes.array.isRequired
	},
	render: function() {
		var news = this.props.news;
		var newsTemplate;
		if (news.length > 0) {
			newsTemplate = news.map(function(item) {
				return (
					<div key={item.id}>
						<Article article={item} />
					</div>
				)
			})	
		} else {
			newsTemplate = <p>К сожалению, новостей нет.</p>
		}
		return (
			<div className="news">
				{newsTemplate}
				<p className={news.length > 0 ? 'count':'hidden'}><strong>Новостей всего: {news.length}</strong></p>
			</div>
		)
	}
});

var App = React.createClass({
	render: function() {
		return (
			<div className="app">
				<h3>Новости</h3>
				<News news={myNews} />
			</div>
		)
	}
});

ReactDOM.render(
	<App />,
	document.getElementById('root')
)