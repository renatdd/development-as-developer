CREATE VIEW SpotifyClone.top_2_hits_do_momento AS
SELECT song.name AS 'cancao',
    COUNT(user_id) AS 'reproducoes'
FROM SpotifyClone.UserSong AS hits
INNER JOIN
    SpotifyClone.Song AS song ON song.song_id = hits.song_id
GROUP BY `cancao`
ORDER BY `reproducoes` DESC, `cancao`
LIMIT 2;
