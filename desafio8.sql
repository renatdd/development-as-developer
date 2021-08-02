DELIMITER $$
CREATE TRIGGER SpotifyClone.trigger_usuario_delete
    BEFORE DELETE ON User
    FOR EACH ROW
BEGIN
    DELETE FROM SpotifyClone.UserArtist WHERE user_id = OLD.user_id;
    DELETE FROM SpotifyClone.UserSong WHERE user_id = OLD.user_id;
END $$
DELIMITER ;
