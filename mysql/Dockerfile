FROM mysql:5.7

CMD [ "--innodb-use-native-aio=0" ]

COPY main.sql /docker-entrypoint-initdb.d/