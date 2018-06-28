# POKEY API

Here is a library that exposes an API to the Pokey the Penguin search at
http://yellow5.com/pokey/search

## Playing Around

There is a file named ```pokey``` in the ```bin``` directory. Use it like this:

    $ ./bin/pokey whiskey
    LITTLE GIRL: MORE WHISKEY POKEY?

## The API

This library exposes one method, ```search```, which takes one argument, a
string to search for. It returns an array with 0 or more results. Each result
is an object with four keys:

* ```title```: The title of the matching Pokey strip
* ```link```: The URL to the strip
* ```image```: The URL to the matching panel of the strip
* ```text```: The text in that panel

## Credits

* Pokey the Penguin is a creation of THE AUTHORS.
* This library was created by Ryan Freebern / [@rfreebern](https://twitter.com/rfreebern).

## See Also

There is a [PHP version](https://github.com/rfreebern/pokey-api-php) available.
