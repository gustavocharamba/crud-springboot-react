package cGustavo.backend.services.expections;

public class DatabaseException extends RuntimeException{


    public DatabaseException(String msg){
        super(msg);
    }
}