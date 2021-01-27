FROM ruby:2.7.1

RUN mkdir -p /var/www/gonddo.github.io

WORKDIR /var/www/gonddo.github.io

COPY Gemfil* ./

RUN gem install bundler -q && bundle install

CMD jekyll serve -H 0.0.0.0
