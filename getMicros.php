<?php
    //open connection to mysql db
    $connection = mysqli_connect("localhost","root","","ofertasMabe") or die("Error " . mysqli_error($connection));
    //$connection = mysqli_connect("localhost","ofert659","2zy0dhgbf5","ofert659_ofertasMabe") or die("Error " . mysqli_error($connection));
    //fetch table rows from mysql db
    $sql = "SELECT * FROM productos WHERE nombre = 'MICROONDAS'";
    $result = mysqli_query($connection, $sql) or die("Error in Selecting " . mysqli_error($connection));

    //create an array
    $emparray = array();
    while($row =mysqli_fetch_assoc($result))
    {
        $emparray[] = $row;
    }
    echo json_encode($emparray);

    //close the db connection
    mysqli_close($connection);
?>
