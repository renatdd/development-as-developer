CREATE VIEW SpotifyClone.cancoes_premium AS
SELECT 
songs.name AS 'nome',
COUNT(*) AS 'reproducoes'
FROM SpotifyClone.UserSong AS history
INNER JOIN
    SpotifyClone.Song AS songs ON songs.song_id = history.song_id
INNER JOIN
    SpotifyClone.User AS users ON users.user_id = history.user_id
WHERE users.plan_id IN (2, 3)
GROUP BY `nome`
ORDER BY `nome`;
