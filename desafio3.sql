CREATE VIEW  SpotifyClone.historico_reproducao_usuarios AS
SELECT user.name AS 'usuario',
    song.name AS 'nome'
FROM SpotifyClone.UserSong AS history
INNER JOIN
    SpotifyClone.User AS user ON user.user_id = history.user_id
INNER JOIN
    SpotifyClone.Song AS song ON song.song_id = history.song_id
ORDER BY `usuario`, `nome`;
