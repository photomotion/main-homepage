FROM httpd:latest
LABEL soengwon "seongwon@edu.hanabt.ac.kr"

COPY ./pages /usr/local/apache2/htdocs/
COPY ./httpd.conf /usr/local/apache2/conf/httpd.conf


