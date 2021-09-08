Investors App
=============

Setup project
--------------
* Update python version in Pipfile (it should be same as your python version)
* Run this command to install requirement packages:

    $ pipenv install

* Run this command to activate python environment:

    $ pipenv shell

* Update DATABASE_URL in **.env** file like this format:

    postgres://<user>:<password>@<host>:<port>/<database_name>

Note: <database_name> must be exist in database server before you run next command

* Create database tables, use this command::

    $ python manage.py migrate --settings=invest_crud.settings

* To run backend server, use this command::

    $ python manage.py runserver --settings=invest_crud.settings

* For frontend, run this command::

    $ cd frontend
    $ yarn install
    $ yarn start

