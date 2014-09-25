package com.ssoward.controller;

import com.ssoward.model.Users;
import com.ssoward.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.List;

/**
 * Created by ssoward on 9/24/14.
 */

@Controller
@RequestMapping("/ajax")
public class SortController {
    static Boolean isHarness;

    @Autowired
    UserService userService;

    @RequestMapping(method = RequestMethod.GET, value="/test", produces = MediaType.APPLICATION_JSON_VALUE)
    public void oldSchoolAjax(HttpServletRequest request, HttpServletResponse response) {
        try {
            response.getWriter().print( "Returned from server at "+ new Date());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @RequestMapping(method = RequestMethod.GET, value="/users", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<String> leader(@RequestParam(value = "page", required = false, defaultValue = "0") int page) {
        List<Users> users = userService.getUsers();
        return new ResponseEntity(users, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.PUT, value="/rappel/harness", produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<String> toggleHarness(@RequestParam(value = "page", required = false, defaultValue = "0") int page) {
        List<Users> users = userService.getUsers();
        return new ResponseEntity(users, HttpStatus.OK);
    }
}
