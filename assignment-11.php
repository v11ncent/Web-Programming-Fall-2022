<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <p>For loop 5 to 15</p>
    <ul>
        <?php 
            for ($i = 5; $i < 15 + 1; $i++) {
               echo "<li>{$i}</li>";
            }
        ?>
    </p>
    <p>Factorial of 6</p>
    <?php
        $factorial = 1;

        for ($i = 1; $i < 6 + 1; $i++) {
            $factorial = $factorial * $i;
        }

        echo "<p>The factorial is: {$factorial}</p>"
    ?>
    <p>Factorial of 10 with a recursive function</p>
    <?php
        $factorial = 1;

        function findFactorial($number) {
            if ($number == 0) {
                return 1;
            }

            return findFactorial($number - 1) * $number;
        }

        $factorial = findFactorial(10);

        echo "<p>The factorial is: {$factorial}</p>";
    ?>
    <p>Temperatures:</p>
    <?php
        $temperatures = [78, 60, 62, 68, 71, 68, 73, 85, 66, 64, 76, 63, 75, 76, 73, 68, 62, 73, 72, 65, 74, 62, 62, 65, 64, 68, 73, 75, 79, 73];
        $sum = 0;
        asort($temperatures, SORT_NUMERIC);
        $five_lowest_temperatures = array_slice($temperatures, 0, 5, true);
        echo 'Five lowest temperatures: ';
        print_r($five_lowest_temperatures);
        echo '<br />';
        rsort($temperatures, SORT_NUMERIC);
        $five_highest_temperatures = array_slice($temperatures, 0, 5, true);
        echo 'Five highest temperatures: ';
        print_r($five_highest_temperatures);


        for ($i = 0; $i < sizeOf($temperatures); $i++) {
            $sum += $temperatures[$i];
        }

        $average = $sum / sizeOf($temperatures);

        echo "<p>The average is: {$average}</p>";
    ?>
    <p>Pattern:</p>
    <?php
        for ($i = 1; $i < 8 + 1; $i++) {
            for ($j = 1; $j < $i + 1; $j++) {
                echo '*';

                if ($j == $i) {
                    echo '<br />';
                }
            }
        }
    ?>
</body>
</html>