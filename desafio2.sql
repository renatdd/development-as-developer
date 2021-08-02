CREATE VIEW  SpotifyClone.estatisticas_musicais AS
SELECT 
(SELECT COUNT(*) FROM SpotifyClone.Song) AS 'cancoes',
(SELECT COUNT(*) FROM SpotifyClone.Artist) AS 'artistas',
(SELECT COUNT(*) FROM SpotifyClone.Album) AS 'albuns';
