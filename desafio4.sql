CREATE VIEW SpotifyClone.top_3_artistas AS
SELECT artist.name AS 'artista',
    COUNT(user_id) AS 'seguidores'
FROM SpotifyClone.UserArtist AS followers
INNER JOIN
    SpotifyClone.Artist AS artist ON artist.artist_id = followers.artist_id
GROUP BY `artista`
ORDER BY `seguidores` DESC, `artista`
LIMIT 3;
