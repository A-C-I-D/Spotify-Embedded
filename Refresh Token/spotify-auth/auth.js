const express = require('express');
const request = require('request');
const querystring = require('querystring');

const client_id = 'protify_client_id';
const client_secret = 'spotify_client_secret';
const redirect_uri = 'redirect_url'; // must match Spotify app settings

const app = express();

app.get('/login', function (req, res) {
  const scope = 'user-read-currently-playing user-read-playback-state';
  res.redirect(
    'https://accounts.spotify.com/authorize?' +
      querystring.stringify({
        response_type: 'code',
        client_id: client_id,
        scope: scope,
        redirect_uri: redirect_uri,
      })
  );
});

app.get('/callback', function (req, res) {
  const code = req.query.code || null;
  const authOptions = {
    url: 'https://accounts.spotify.com/api/token',
    form: {
      code: code,
      redirect_uri: redirect_uri,
      grant_type: 'authorization_code',
    },
    headers: {
      Authorization:
        'Basic ' +
        Buffer.from(client_id + ':' + client_secret).toString('base64'),
    },
    json: true,
  };

  request.post(authOptions, function (error, response, body) {
    if (!error && response.statusCode === 200) {
      const refresh_token = body.refresh_token;
      res.send(
        `<h2>Your Refresh Token:</h2><pre>${refresh_token}</pre><p>Save this safely!</p>`
      );
    } else {
      res.send('Error getting tokens');
    }
  });
});

app.listen(8888, () => {
  console.log('Go to http://127.0.0.1:8888/login');
});
