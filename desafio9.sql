DELIMITER $$

CREATE PROCEDURE SpotifyClone.albuns_do_artista(IN artist_name VARCHAR(20))
BEGIN
    SELECT artist.name AS 'artista', albuns.name AS 'album'
    FROM SpotifyClone.Album AS albuns
    INNER JOIN
    SpotifyClone.Artist AS artist ON albuns.artist_id = artist.artist_id
    WHERE artist.name = artist_name
    ORDER BY `album`;
END $$

DELIMITER ;
