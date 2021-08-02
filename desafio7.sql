CREATE VIEW SpotifyClone.perfil_artistas AS
SELECT 
artist.name AS 'artista',
album.name AS 'album',
(SELECT COUNT(*) FROM SpotifyClone.UserArtist WHERE artist_id = artist.artist_id) AS 'seguidores'
FROM SpotifyClone.Album AS album
INNER JOIN
    SpotifyClone.Artist AS artist ON artist.artist_id = album.artist_id
ORDER BY `seguidores` DESC, `artista`, `album`;
