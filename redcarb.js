Requester = require('./requester').Requester;

//request user data
var user = function (username, cb) {
	var path = '/user/' + username + '/',
		requester = new Requester(path);

	return (cb) ? requester.exe(cb) : requester;
};

//request subreddit data
var r = function (subreddit, cb) {
	var path = '/r/' + subreddit + '/',
		requester = new Requester(path);

	return (cb) ? requester.exe(cb) : requester;
};

//lists reddit front page filters
var list = function (filter, cb) {
	var path = '',
		requester = '';

	if (filter) {
		path = filter + '/', requester = new Requester(path);
	} else {
		requester = new Requester();
	}

	return (cb) ? requester.exe(cb) : requester;
};

var comments = function (subreddit, id, cb) {
	var path = '/r/' + subreddit + '/comments/' + id,
		requester = new Requester(path);

	return (cb) ? requester.exe(cb) : requester;
}

var search = function (subreddit, fromTime, toTime, cb) {
	var path = '/r/' + subreddit + '/search';
	requester = new Requester(path, true, fromTime, toTime);

	return (cb) ? requester.exe(cb) : requester;
}

exports.user = user;
exports.r = r;
exports.list = list;
exports.comments = comments;
exports.search = search;
